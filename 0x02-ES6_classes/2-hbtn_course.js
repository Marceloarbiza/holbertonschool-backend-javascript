export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof (length) !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }
    students.forEach((st) => {
      if (typeof (st) !== 'string') {
        throw TypeError('Students must be an array of strings');
      }
    });
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof (length) !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }
    students.forEach((st) => {
      if (typeof (st) !== 'string') {
        throw TypeError('Students must be an array of strings');
      }
    });
    this._students = students;
  }
}
