import type { Project } from "@/types/project";

export const MY_PROJECT_LIST: Array<Project> = [
  {
    title: "JSON value Translator",
    link: "https://gpt-json-translator.vercel.app",
    releaseDate: "2024-09-18",
    description:
      "i18next를 사용하여 빠르게 웹 서비스의 다국어 지원을 대응하기 위해 개발하였습니다. GPT를 활용하여 JSON의 value를 다른나라의 언어로 번역합니다.",
  },
  {
    title: "JSON Key Inspector",
    link: "https://www.npmjs.com/package/i18next-key-inspector",
    releaseDate: "2024-07-24",
    description:
      "처음에는 i18next를 사용하여 다국어 지원을 위해 관리되고있는 JSON파일을 위해 개발했습니다. 동일한 텍스트에 대해 각각 다른 언어의 JSON파일에서 key가 다르거나 빠진 경우가 있어 제대로 번역이 되지 않은 상태로 배포된 적이 있습니다. 그래서 언어 별로 JSON 파일의 key들을 검사하여 다른 부분을 출력하는 라이브러리를 개발하였습니다.",
  },
];
