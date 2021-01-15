const adminSearchFilter = (filter, member) => {
  let skillBool;
  const refactoredSearched = [];

  // BY SKILL
  for (let i = 0; i < filter.length; i++) {
    //  BY WORD
    for (let ii = 0; ii < filter[i].length; ii++) {
      // BY LETTER
      for (let iii = 0; iii < member.skills.length; iii++) {
        //  BY WORD // BY LETTER
        if (
          String(filter[filter.length - 1][ii]).toLowerCase() ===
          String(member.skills[iii].skill[ii]).toLowerCase()
        ) {
          skillBool = true;
          refactoredSearched.push(member.skills[iii].skill);
        } else if (
          String(filter[i]).toLowerCase() ===
          String(member.skills[ii].skill).toLowerCase()
        ) {
          skillBool = true;
          ii = filter[i].length;
        }
        iii = member.skills.length;
        ii = filter[i].length;
      }
    }
  }

  //BY NAME
  for (let i = 0; i < filter.length; i++) {
    //  BY WORD
    for (let ii = 0; ii < filter[i].length; ii++) {
      if (
        String(filter[i]).toLowerCase() ===
          String(member.display_name).toLowerCase() ||
        String(filter[i]).toLowerCase() ===
          String(member.first_name).toLowerCase() ||
        String(filter[i]).toLowerCase() ===
          String(member.last_name).toLowerCase()
      ) {
        skillBool = true;
        ii = filter[i].length;
      }
      ii = filter[i].length;
    }
  }

  return { bool: skillBool, refactoredSearched };
};

export default adminSearchFilter;
