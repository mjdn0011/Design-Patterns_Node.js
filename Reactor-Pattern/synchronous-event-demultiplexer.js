const socketA, pipeB;
watchedList.add(socketA, FOR_READ); // [1]
watchedList.add(pipeB, FOR_READ);

while (events = demultiplexer.watch(watchList)) { // [2]
  
}