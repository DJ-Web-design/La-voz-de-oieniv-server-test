import * as admin from 'firebase-admin';

var serviceAccount = {
  "type": "service_account",
  "project_id": "chat-lavozdeoieniv",
  "private_key_id": "bec01e49bbd74f91917ed1d74ff4011c7a19a096",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDH8I56Bqoe6k87\nDOHcJKIXd+ki48di4EZTpNyRZRi1jIqZUl7Ppq7kmOZkVtOPcvrJJ6L95RmPLIHz\nTdmlV5X3WZDkHkUUspAyjAonP9Xwg7WoMzEP4xKKsL8uu0sjcIO1qIRW0SYJmfx3\n9LSoBLr9vjLCMyi/jEROwIsSn+/DUdDioUafV7GK/0TW5k87OtzvpNmotsJE5jTd\nXBImyj7sU3PGd22nTJceB5ULZbnQAwtEZrafjo2h8McWLZMfzUVeWur27mcayNwW\nNDOLeIzeHVUP1JCsZAN5kR6Pb3ZbWgvfwJzEgpyezUT4KvYc0thW9xcE54YNLmrl\n5BhgKO3DAgMBAAECggEACuxhFFid3b+GYZ8EDe9wbaDO+2l/YK8JGJPGuyjPT0fk\n4JiH9odQQcv6tluqBknNWsUQGhf0rAZN+Tl1HRvqZQ+fI19l/cn9p81P1rIdoZzI\nhW56jTgmMK6UW1y/L6n7gCa7SDT4A4lGqlUTs6RChQ9pnYOHA+QJbVYGoxda1Yxf\nf+nRi7B94IDFSJPa3X/QwYiP8oYRMFhCkWzJ1qI8v7ovrVGVkc12ZPFtaXNGUaGy\n2nZg/NkBRQVX2sAMHPHvxqDyPtUGC3ubLnea6AN//WCz17tzAF981kznMu5Sgb3b\n6dizT9DeKOMYqLocdoNXhjU4bJpBi+SXYIL9CK6++QKBgQDuyLmiY6464G61rRGJ\nACKVSmgf4Cc1sMX9T13zP62n0Xj1w+LLCPHj/jUXAI6JNRCWiVh0/Tg6LYQdbF0c\nVW4lNxKoU/tEut1NB2XCMmxhAROSvD8WvbqFVgrZ12uTEP0nU/TclC2FAZ1FyDEh\ni0mk49F3tpxDP9BJODQ0QTVyOwKBgQDWWt/HlqQYrpgCpOfeVhKT1noSnTIoM3/a\nM0V+NzhgMlhoYaegRGgy5hB0wZzmQO3qui5c29uypy4ldMT/kUbM446x+bGdYyB0\ntJc4JACfxWTnXgmb1dEx78c5iopqoeLw77TucnSf8Xc93k4vU6sEXVKMsXMKBZdh\n6ZOcN4/yGQKBgQDsNUfdKfoqZ+Vcdq3H9og/YnGKRrTC2fGhWSe4/x8LyZ18kKAC\n9QBD5y4haP2XIRUdtRP59pvugSQV7yJUavYgflBIj3saTDeqgUzaRAMOGoCAQROv\nrVObnrfxMrZJrx6eDuFEaph04Fnxs81WP3FEWdDWOaBureue4qhRoMf8DQKBgQCq\n3SUj42BKjGF/OhPZlqKYVY5Y6BTjFqoDNHtgcIPvqjHugmkrx1uHtvvHFc4LfBYp\n1N7ABkDJ15lhIgMl9JeLGpjUJUT/P9TPMmSXy5rzwFT+WGcwYO+v7oHPzC8pcIGF\nrI18xJ9SHxf9qQaJkxfvErSKkagxhON2mMmg7GlBgQKBgQCCsdkMldzbc5YDhWmE\n+0bEHysqFBcuTRQsQaQL4XP4Tw6kOa0ySpYkEWuavvSPiNsnUSc696bpMgIn/oLs\n9fel3K/GGLVRqDcP12s7FoXbZkoS+wBg5cpvhpPWlY7Ff2SHULUhezY8n1Pc5tAe\nGlGFGROpqqZHAVl4VLwGW0LqSQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-4cmvz@chat-lavozdeoieniv.iam.gserviceaccount.com",
  "client_id": "101557732374103218538",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4cmvz%40chat-lavozdeoieniv.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chat-lavozdeoieniv.firebaseio.com"
});
const db = admin.database();

const sliderDatabase = db.ref("slider");
const votesDatabase = db.ref("votes")

export {sliderDatabase, votesDatabase}
