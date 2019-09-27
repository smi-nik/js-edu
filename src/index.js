/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
const LEARN_BASICS_HOURS = 500;
const BE_A_MASTER_HOURS = 800;

module.exports = function getTimeForEducation(
		focus = 'family', 
		knowsProgramming = true,
		config = {family: 4}
	) {
      const totalHoursNeeded = knowsProgramming ? BE_A_MASTER_HOURS : BE_A_MASTER_HOURS + LEARN_BASICS_HOURS;
      return Math.ceil(totalHoursNeeded / config[focus]);
};
