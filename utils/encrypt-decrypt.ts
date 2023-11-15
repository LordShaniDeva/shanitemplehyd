import crypto from 'crypto';

/**
 * Encrypt and decrypt data using AES-256-CBC
 * @param {string} algorithm
 * @param {string} key
 * @param {string} iv
 */

class EncryptDecrypt {
  private algorithm: string;
  private key: any;
  private iv: any;
  constructor(
    algorithm = 'aes-256-cbc',
    key = crypto.randomBytes(32),
    iv = crypto.randomBytes(16)
  ) {
    this.algorithm = algorithm;
    this.key = key;
    this.iv = iv;
  }

  encrypt(text: any) {
    let cipher = crypto.createCipheriv(
      this.algorithm,
      Buffer.from(this.key),
      this.iv
    );
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return {
      iv: this.iv.toString('hex'),
      encryptedData: encrypted.toString('hex'),
    };
  }

  decrypt(encryptedData: string) {
    let iv = Buffer.from(this.iv, 'hex');
    let encryptedText = Buffer.from(encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(
      this.algorithm,
      Buffer.from(this.key),
      iv
    );
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }
}
export default EncryptDecrypt;
