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

  async putObject(params) {
    try {
      const data = await this.s3Instance.putObject(params).promise();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default awsConnection;
