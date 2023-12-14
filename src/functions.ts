export function cutter(parameter: string) {
  if (!parameter) {
    return null;
  }
  if (parameter[0] == "-" && parameter[1] == "-") {
    return parameter.slice(2).toLocaleLowerCase();
  } else if (parameter[0] == "-" && parameter[2] == undefined) {
    return parameter[1].toLocaleLowerCase();
  }
}
