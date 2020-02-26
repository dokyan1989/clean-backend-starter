module.exports = {
  isUTCTimeMilliseconds
};

function isUTCTimeMilliseconds (datetime) {
  return (typeof (datetime) === 'number') && (new Date(datetime).toUTCString().substring(26) === 'GMT');
}
