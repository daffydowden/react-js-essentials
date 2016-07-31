function getNumberOfTweetsinCollection(collection) {
    var TweetUtils = require('./TweetUtils');
    var listOfCollectionTweetIds = TweetUtils.getListOfTweetIds.length;

    return listOfCollectionTweetIds.length;
}

function isEmptyCollection(collection) {
    return (getNumberOfTweetsinCollection(collection) === 0);
}

module.exports = {
    getNumberOfTweetsinCollection: getNumberOfTweetsinCollection,
    isEmptyCollection: isEmptyCollection
};
