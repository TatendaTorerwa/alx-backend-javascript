export default function getListStudentIds(array) {
  let newArray = [];
  if (array instanceof Array) {
    newArray = array.map((student) => student.id);
  }

  return newArray;
}
