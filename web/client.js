// client.js
import sanityClient from "@sanity/client";

sanityClient
  .fetch('*[_type == "post"]')
  .then(posts => {
    console.log('All posts:', posts)
  })
  .catch(err => {
    console.error('Error fetching posts:', err)
  })
  
export default sanityClient({
  projectId: "vg1sjyep", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});
