const fixAdminChartType = (type) => {
  let newType;

  switch (type) {
    case 'age18':
      newType = '< 18';
      break;
    case 'age1824':
      newType = '18-24';
      break;
    case 'age2534':
      newType = '25-34';
      break;
    case 'age3544':
      newType = '35-44';
      break;
    case 'age4554':
      newType = '45-54';
      break;
    case 'age5564':
      newType = '55-64';
      break;
    case 'age6574':
      newType = '65-74';
      break;
    case 'age75':
      newType = '> 75';
      break;

    case 'asian':
      newType = 'Asian';
      break;
    case 'indian':
      newType = 'Indian';
      break;
    case 'mexican':
      newType = 'Mexican';
      break;
    case 'multiracial':
      newType = 'Multiracial';
      break;
    case 'other':
      newType = 'Other';
      break;
    case 'otherHispanic':
      newType = 'Other Hispanic';
      break;
    case 'puertoRican':
      newType = 'Puerto Rican';
      break;
    case 'white':
      newType = 'White';
      break;

    case 'female':
      newType = 'Female';
      break;
    case 'nonBinary':
      newType = 'Non-Binary';
      break;

    case 'lgbtqia':
      newType = 'LGBTQIA';
      break;
    case 'straight':
      newType = 'Straight';
      break;

    case 'noAnswer':
      newType = 'No Answer';
      break;

    default:
      break;
  }

  return newType;
};

export default fixAdminChartType;
