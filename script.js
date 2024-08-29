function tweetMessage() {
    const message = "MIRAI TO WA PROUND\n#MiraitowaTH #ProundBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
