function person (f_N, l_N){
    this.f_N = f_N;
    this.l_N = l_N;

}

let person1  = new person("sai", "nihash");
let person2  = new person("sri", "pavan");



console.log(person1.f_N);

console.log(`${person2.f_N} ${person2.l_N}`);