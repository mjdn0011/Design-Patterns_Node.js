resources = [socketA, socketB, socketC];
while (!resource.isEmpty) {
  for (i = 0; i < resources.length; i++) {
    resource = resources[i];
    // Start to Read
    let data = resource.read();
    if (data === NO_DATA_AVAILABLE) {
      // No Data to Read
      continue;
    }
    if (data === RESOURCE_CLOSED) {
      // Remove resource because data resource is closed
      resources.remove(i);
    } else {
      // 
      consumeData(data);
    }
  }
}