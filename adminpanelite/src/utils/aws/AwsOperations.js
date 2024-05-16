import awsConnection from "./AwsConnection";

export const getS3BucketList = async (imageName) => {
  const params = {
    Bucket: "motherandbabycare",
    Key: imageName,
  };

  const awsConnectionObj = new awsConnection();
  const s3 = awsConnectionObj.getS3Instance();

  try {
    const data = await awsConnectionObj.getObject(params);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const S3ObjectsGet = async (ObjectName) => {
  const params = {
    Bucket: "motherandbabycare",
    Key: ObjectName,
  };

  const awsConnectionObj = new awsConnection();
  try {
    const data = await awsConnectionObj.getObject(params);
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const S3ObjectsDelete = async () => {
  // Implement S3 object deletion logic here
};

export const S3ObjectsUpload = async (ObjectName, fileContent) => {
  // Implement S3 object upload logic here
  const params = {
    Bucket: "motherandbabycare",
    Key: ObjectName, //ObjectName
    Body: fileContent,
  };
  const awsConnectionObj = new awsConnection();
  try {
    const data = await awsConnectionObj.putObject(params);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
