class Grade {
  subject;
  value;

  constructor(subject, value) {
    this.subject = subject;
    this.value = value;
  }
}

class Student {
  name;
  surname;
  _grades;
  averageGrade;

  constructor(name, surname, grades) {
    this.name = name;
    this.surname = surname;
    this._grades = grades || [];
    this.averageGrade = 0;
  }

  hello() {
    return `Witaj ${this.name} ${this.surname}, Twoja średnia ocen to: ${this.averageGrade}`;
  }

  set grades(grade) {
    this._grades.push(grade);
    this.averageGrade =
      this._grades.reduce((acc, curr) => acc + curr.value, 0) /
      this._grades.length;
  }

  get grades() {
    let out = "";
    this._grades.forEach((grade) => {
      out += `${grade.subject}: ${grade.value}\n`;
    });
    return out;
  }
}

const s = new Student("Jan", "Kowalski");
console.log(s.hello());
s.grades = new Grade("Matematyka", 4);
s.grades = new Grade("Fizyka", 5);
s.grades = new Grade("Chemia", 3);
console.log(s.hello());
console.log(s.grades);
