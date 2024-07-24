const notifee = {
    requestPermission: jest.fn(),
    createChannel: jest.fn().mockResolvedValue('default'),
    displayNotification: jest.fn(),
  };
  
  export default notifee;