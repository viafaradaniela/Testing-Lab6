const ejercicio3 = require("./Ejercicio3");
test("Ejercicio3", () => {
    let list1 = ['e', 'd', 'f'];
    let list2 = ['a', 'c', 'b'];
    let list3 = ['m', 'o', 'n'];
    let list = list1.concat(list2, list3);
    expect(ejercicio3(list)).toEqual(list);
});
