function tweetMessage() {
    const message = "MIRAI TO WA PROUD\n#MiraitowaTH #ProudBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
