import { FC } from "react";
import ProgressBar from "./ProgressBar";
import { apiDataType } from "@/types/types";

const PageDetails: FC<apiDataType> = (props) => {
  return (
    <div className="w-full mt-3">
      <h1 className="text-lg font-poppins font-bold text-cyan-500 ml-10">
        Results for: {props.url}
      </h1>
      <h1 className="text-lg font-poppins font-bold text-cyan-500 ml-10">
        Fetch Time: {props.fetch_time}
      </h1>
      <div className="ml-10 my-3 w-4/5 md:w-1/2">
        <h2 className="text-lg font-poppins text-cyan-500 mb-2">
          On Page Score:
        </h2>
        <ProgressBar progressPercentage={props.onpage_score} />
      </div>
      <h1 className="text-lg font-poppins text-cyan-500 ml-10">
        Speed Insights:
      </h1>
      <div className="flex flex-wrap gap-3 flex-row ml-10 mt-2 w-full md:w-1/2">
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.page_timing.waiting_time} ms
          <br />
          Waiting Time
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.page_timing.time_to_interactive} ms
          <br />
          Time to Interactive
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.page_timing.download_time} ms
          <br />
          Download Time
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.page_timing.dom_complete} ms
          <br />
          Dom Complete Time
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.page_timing.largest_contentful_paint} ms
          <br />
          Largest Contentful Paint
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.page_timing.time_to_secure_connection} ms
          <br />
          Time to Secure Connection
        </div>
      </div>
      <h1 className="text-lg font-poppins text-cyan-500 ml-10 mt-3 ">
        On-Page Results:
      </h1>
      <div className="flex flex-wrap gap-3 flex-row ml-10 mt-2 w-full md:w-1/2">
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.internal_links_count}
          <br />
          Internal Links Count
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.external_links_count}
          <br />
          External Links Count
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.images_count}
          <br />
          Images Count
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.images_size} Bytes
          <br />
          Images Size
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.scripts_count}
          <br />
          Scripts Count
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md">
          {props.scripts_size} Bytes
          <br />
          Scripts Size
        </div>
      </div>
      <h1 className="text-lg font-poppins text-cyan-500 ml-10 mt-3">
        SEO Test:
      </h1>
      <div className="flex flex-wrap gap-3 flex-row ml-10 mt-2 w-full md:w-1/2">
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md py-1 px-1">
          {props.checks.has_render_blocking_resources ? "Page has Render Blocking Resources": "Page Does not have Render Blocking Resources"}
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md py-1 px-1">
          {props.checks.low_content_rate ? "Page has Low Content Rate": "Page Does not have Low Content Rate"}
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md py-1 px-1">
          {props.checks.no_image_title ? "Page contains Images without Title": "Page has proper Image Titles"}
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md py-1 px-1">
          {props.checks.no_image_alt ? "Page contains Images without alt attribute": "Page has proper Image alt attribute."}
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md py-1 px-1">
          {props.checks.seo_friendly_url ? "URL is SEO Friendly": "Consider choosing a short and easy url."}
        </div>
        <div className="text-lg font-poppins text-cyan-500 w-64 bg-slate-200 text-center rounded-md py-1 px-1">
          {props.checks.title_too_short ? "Title Is Too short": "Page has appropriate title length."}
        </div>
        
      </div>
    </div>
  );
};

export default PageDetails;