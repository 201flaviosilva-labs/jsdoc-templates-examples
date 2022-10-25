import Objects from "./2DObjects/Objects";
import * as Maths from "./Maths/index.js";

import { FIFO } from "./FIFO";
import { LIFO } from "./LIFO";

import { stringToCamelCase, camelCaseToNormal } from "./camelCase.js";
import { stringToCapitalize, capitalizeToNormal } from "./capitalizeCase.js";
import { stringToKebabCase, kebabCaseToNormal } from "./kebabCase.js";
import { stringToScreamingSnakeCase, screamingSnakeCaseToNormal, screamingSnakeCaseToNormalDeprecated } from "./screamingSnakeCase.js";
import { stringToSnakeCase, snakeCaseToNormal } from "./snakeCase.js";

export {
	Objects,
	Maths,

	FIFO,
	LIFO,

	stringToCamelCase, camelCaseToNormal,
	stringToCapitalize, capitalizeToNormal,
	stringToKebabCase, kebabCaseToNormal,
	stringToScreamingSnakeCase, screamingSnakeCaseToNormal, screamingSnakeCaseToNormalDeprecated,
	stringToSnakeCase, snakeCaseToNormal,
}
