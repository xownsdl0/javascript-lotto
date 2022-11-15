const MissionUtils = require('@woowacourse/mission-utils');
const inputDataObject = require('../model/InputDataObject')
const inputMessage = require('../model/InputMessage')
const checkError = require('../controller/CheckError')

const lotteryNumbers = {
  inputLotteryNumber(message) {
    MissionUtils.Console.readLine(message, inputValue => {
      inputDataObject.raffleNumbers = inputValue.split(',').map(Number);
      return this.inputBonusNumber(inputMessage.BONUS_NUMBER)
    });
  },

  inputBonusNumber(message) {
    MissionUtils.Console.readLine(message, inputValue => {
      inputDataObject.bonusNumber = checkError.isUnique(inputValue);
      return null
    });
  },
};

module.exports = lotteryNumbers;