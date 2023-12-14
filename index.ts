import { checkUrl } from "./src/tools/checkUrl";
import { IRequest, urls } from "./src/tools/urls";


const checkUrls = async (requests: IRequest[]) => {
  await Promise.all 
  (requests.map(async (request): Promise<void> => {
    await checkUrl(request.url, request.config);
   })
  );
}

checkUrls(urls);