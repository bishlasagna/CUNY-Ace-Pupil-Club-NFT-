(async () => {
  try {
    const apps = await sdk.getApps();
    // Get the address of the most recently created project
    console.log("Your app address is:", apps[0].address);
  } catch (err) {
    console.error("Failed to get apps from the sdk", err);
    process.exit(1);
  }
})(
