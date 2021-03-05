const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const Democratic = president.filter((president) => president.party === "D");
  
  
  
//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const OneTermRepublican = presidents.filter(function(president){
  if (president.terms === 1 && president.party === "R"){
     return true;
  }
});

//3) return only the last three presidents

const reverse = presidents.reverse();
const three = reverse.slice(reverse.lenght - 3);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

const Dems2 = presidents
.filter((president) => president.party === "D")
.filter((el) => el.terms === 2);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

if (Dems2.a((president) => president.name === "Lyndon Johnson")) {
  alert("LBJ serve two terms");}
  else {
  alert ("LBJ served one term");
}