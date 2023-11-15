import jwt from 'jsonwebtoken';

const createToken = async (data: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(data, process.env.JWT_SECRET!, {
      expiresIn: '30d',
    });
    resolve(token);
  });
};
export default createToken;
