const Default = (call: any, callback: any) => {
  callback(null, {
    greeting: `${call.request.name} ${call.request.languageCode}`,
  });
};

const defaultService = {
  Default,
};

export default defaultService;
