const MOCK = {
    //TODO: currently not in use, when there is S3 buckets we should use it
    // basePublicUrl: "http://placehold.it/",
    phoneNumber: '0539478394',
    email: 'company@example.com',
    location: {long: '32.060002', lat: '34.863433', address: 'ארלוזורוב 10 בת ים'}
};

export const fetchAppContext = async () => new Promise(r => setTimeout(() => r(MOCK), 1000));
