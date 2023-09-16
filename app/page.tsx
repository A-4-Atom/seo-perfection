"use client";
import { useState } from "react";
import Header from "@/components/Header";
import PageDetails from "@/components/PageDetails";
import Loader from "@/components/Loader";
import axios from "axios";
import { postArrayType, configType, apiDataType } from "@/types/types";

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState("");
  const [data, setData] = useState<apiDataType>({
    url: "",
    fetch_time: "",
    onpage_score: 94.15,
    page_timing: {
      time_to_interactive: 85,
      waiting_time: 18,
      download_time: 1,
      dom_complete: 268,
      largest_contentful_paint: 280.7,
      time_to_secure_connection: 0
    },
    checks: {
      title_too_short: true,
      low_content_rate: true,
      no_image_alt: true,
      no_image_title: true,
      canonical: true,
      seo_friendly_url: true,
      has_render_blocking_resources: true,
    },
    internal_links_count: 1,
    external_links_count: 0,
    images_count: 4,
    images_size: 123808,
    scripts_count: 9,
    scripts_size: 409100,
  });
  const post_array: postArrayType = [
    {
      url: url,
      enable_javascript: true,
      load_resources: true,
      enable_browser_rendering: true,
    },
  ];

  const config: configType = {
    method: "post",
    url: "https://api.dataforseo.com/v3/on_page/instant_pages",
    auth: {
      username: process.env.NEXT_PUBLIC_DATAFORSEO_LOGIN as string,
      password: process.env.NEXT_PUBLIC_DATAFORSEO_PASSWORD as string,
    },
    data: post_array,
    headers: {
      "content-type": "application/json",
    },
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true)
    event.preventDefault();
    axios(config)
      .then(function (res) {
        let result = res["data"]["tasks"];
        let formattedResult: apiDataType = {
          url: url,
          fetch_time: result[0].result[0].items[0].fetch_time,
          onpage_score: result[0].result[0].items[0].onpage_score,
          page_timing: {
            time_to_interactive:
              result[0].result[0].items[0].page_timing.time_to_interactive,
            waiting_time: result[0].result[0].items[0].page_timing.waiting_time,
            download_time:
              result[0].result[0].items[0].page_timing.download_time,
            time_to_secure_connection:
              result[0].result[0].items[0].page_timing.time_to_connection,
            dom_complete: result[0].result[0].items[0].page_timing.dom_complete,
            largest_contentful_paint:
              result[0].result[0].items[0].page_timing.largest_contentful_paint,
          },
          checks: {
            title_too_short:
              result[0].result[0].items[0].checks.title_too_short,
            low_content_rate:
              result[0].result[0].items[0].checks.low_content_rate,
            no_image_alt: result[0].result[0].items[0].checks.no_image_alt,
            no_image_title: result[0].result[0].items[0].checks.no_image_title,
            canonical: result[0].result[0].items[0].checks.canonical,
            seo_friendly_url:
              result[0].result[0].items[0].checks.seo_friendly_url,
            has_render_blocking_resources:
              result[0].result[0].items[0].checks.has_render_blocking_resources,
          },
          internal_links_count:
            result[0].result[0].items[0].meta.internal_links_count,
          external_links_count:
            result[0].result[0].items[0].meta.external_links_count,
          images_count: result[0].result[0].items[0].meta.images_count,
          images_size: result[0].result[0].items[0].meta.images_size,
          scripts_count: result[0].result[0].items[0].meta.scripts_count,
          scripts_size: result[0].result[0].items[0].meta.scripts_size,
        };

        setData(formattedResult);
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUrl(event.target.value);
  }

  return (
    <main className="">
      <Header />
      <div className="w-full flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 w-full"
        >
          <input
            className="w-4/5 md:w-2/5 font-poppins p-1 bg-cyan-400 appearance-none border-2 border-cyan-200 rounded text-gray-700 placeholder-white focus:outline-none focus:bg-white focus:border-cyan-300"
            type="url"
            value={url}
            onChange={handleChange}
            placeholder="Enter an https:// URL:"
            required
          />
          <button
            type="submit"
            className="text-lg font-poppins text-cyan-500 font-medium border border-cyan-600 rounded-md max-w-max px-5"
          >
            Submit
          </button>
        </form>
      </div>
      {
        loading ? <Loader /> : data.url != "" && <PageDetails {...data} />
      }
    </main>
  );
}
