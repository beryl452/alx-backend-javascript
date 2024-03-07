import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classroomSizeList = [19, 20, 34];

  return classroomSizeList.map((size) => new ClassRoom(size));
}
