import { createClient } from "contentful";
import { env } from "../utils/constants";

/* Configure contentful client sdk */
const client = createClient({
  space: env.contentful.spaceId,
  accessToken: env.contentful.accessToken,
});

export const retrieveDesignAssets = async () => {
  return await client.getAssets({
    "metadata.tags.sys.id[all]": "designProjects",
  });
};
