function average(notas = []) {
  const average = notas.reduce((acc, nota) => nota + acc, 0) / notas.length;
  if (average < 5) {
    console.log("suspenso");
  } else if (average >= 5 && average <= 7) {
    console.log("aprobado");
  } else {
    console.log("notable");
  }
}

average([5, 5, 5, 10, 12]);
