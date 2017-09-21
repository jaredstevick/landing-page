export function generateId(name) {
  let id;
  if (name.toLowerCase().indexOf('logan') > -1) {
    id = '9a528ad5-a3d4-4859-a550-c07a0a2891fa';
  } else if (name.toLowerCase().indexOf('jared') > -1) {
   id = '9a528ad5-a3d4-4859-a550-c07a0a2891fb';
  } else {
    id = '9a528ad5-a3d4-4859-a550-c07a0a2891fc';
  }

  return id;
}