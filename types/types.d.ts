export type postArrayType = {
  url: string;
  enable_javascript: boolean;
  load_resources: boolean;
  enable_browser_rendering: boolean;
}[];

export type configType = {
  method: "post";
  url: "https://api.dataforseo.com/v3/on_page/instant_pages";
  auth: {
    username: string;
    password: string;
  };
  data: postArrayType;
  headers: {
    "content-type": "application/json";
  };
};

export type apiDataType = {
  url: string;
  fetch_time: string;
  onpage_score: number;
  page_timing: {
    time_to_secure_connection: number;
    waiting_time: number;
    download_time: number;
    time_to_interactive: number;
    dom_complete: number;
    largest_contentful_paint: number;
  };
  checks: {
    title_too_short: boolean;
    low_content_rate: boolean;
    no_image_alt: boolean;
    no_image_title: boolean;
    canonical: boolean;
    seo_friendly_url: boolean;
    has_render_blocking_resources: boolean;
  };
  internal_links_count: number;
  external_links_count: number;
  images_count: number;
  images_size: number;
  scripts_count: number;
  scripts_size: number;

};
