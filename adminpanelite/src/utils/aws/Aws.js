import Aws from "aws-sdk";

class awsConnection {
  constructor() {
    if (!awsConnection.instance) {
      Aws.config.update({
        credentials: {
          accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        },
      });
      this.s3Instance = new Aws.S3();
      awsConnection.instance = this;
    }
    return awsConnection.instance;
  }

  getS3Instance() {
    return this.s3Instance;
  }

  async getObject(params) {
    try {
      const data = await this.s3Instance.getObject(params).promise();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

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
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const S3ObjectsDelete = async () => {
  // Implement S3 object deletion logic here
};
