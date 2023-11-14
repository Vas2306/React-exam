let tag = 'TbBusinessplan';
export default function GetIconBusiness(type) {
  switch (type) {
    case 'business':
      tag = 'TbBusinessplan';
      break;
    case 'financial':
      tag = 'LiaBusinessTimeSolid';
      break;
    case 'development':
      tag = 'TiBusinessCard';
      break;
    case 'market':
      tag = 'MdBusiness';
      break;
    default:
      console.log('Invalid subscription type');
  }
  return tag;
}

// switch (typea) {
//     case "business":
//       tag = "<TbBusinessplan className={css.helpimg} color={color}/>";
//       break;
//     case "financial":
//       tag = "<LiaBusinessTimeSolid className={css.helpimg} color={color}/>";
//       break;
//     case "development":
//       tag = "<TiBusinessCard className={css.helpimg} color={color}/>";
//       break;
//     case "market":
//       tag = "<MdBusiness className={css.helpimg} color={color}/>";
//       break;
//     default:console.log("Invalid subscription type");
//   }
