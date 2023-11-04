// import AWS from "aws-sdk";

// // Set AWS configurations
// AWS.config.update({
//   accessKeyId: "YOUR_ACCESS_KEY_ID",
//   secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
//   region: "YOUR_S3_BUCKET_REGION",
// });

// const s3 = new AWS.S3();

// // Function to list only folders in the 'public' directory of your S3 bucket
// const listFolders = async () => {
//   const params = {
//     Bucket: "sthlm-east-storage-7c245c11173242-staging",
//     Prefix: "public/",
//     Delimiter: "/",
//   };

//   try {
//     const data = await s3.listObjectsV2(params).promise();
//     if (data.CommonPrefixes) {
//       const folders = data.CommonPrefixes.map((folder) => folder.Prefix);
//       console.log("Folders:", folders);
//       // Process or display the folder names in your frontend
//     } else {
//       console.log('No folders found in the "public" directory.');
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// // Call the function when needed (e.g., on component mount)
// listFolders();
