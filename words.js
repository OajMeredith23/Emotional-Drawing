// const storyStructure = ['pronoun', 'verb', 'the', 'adjective', 'in', 'pronoun', 'noun', 'and', 'verb', 'adjective', '.', 'pronoun', 'verb', 'to', 'the', 'noun', 'and', 'verb', 'on', 'her', 'adjective', 'noun', '.', 'pronoun', 'had', 'adverb', 'adjective', 'adjective', 'place', 'with', 'its', 'adjective', 'adjective', 'noun', '.', 'It', 'was', 'a', 'place', 'that', 'verb', 'pronoun', 'noun', 'to', 'feel', 'adjective', '.']
// She looked at the cursed piano...
// const storyStructure = ['pronoun', 'verb', 'the', 'adjective', 'noun']

const words = {
    /* Pronoun */1: {
        "pronoun": true,
        "she": ["She"],
        "he": ["He"],
        "they": ["They"],
    },
    /* Verb */2: {
        "neutral": ['looked at'],
        "happy": ['dreamt about'],
        "angry": ['thought about'],
        "sad": ['walked towards'],
        "disgusted": ['turned her nose up to the'],
        "surprised": ['screamed at the']
    },
    /* Fill */ 3: {
        "fill": true,
        "word": "the"
    },
    /*Adjective */ 4: {
        "neutral": ['uninspiring'],
        "happy": ['gleaming', 'charming'],
        "angry": ['archaic', 'frustrating', 'devastating'],
        "sad": ['dull', 'overcoming'],
        "disgusted": ['vile', 'gross'],
        "surprised": ['overwhelming', 'staggering']
    },
    /* Noun */ 5: {
        "neutral": ['advertisement', 'tabloid'],
        "happy": ['bagel', 'rabbit', 'banana', 'guinea pig'],
        "angry": ['cabbage'],
        "sad": ['koala'],
        "disgusted": ['grub'],
        "surprised": ['alligator']
    },
    /* fill */ 6: {
        "fill": true,
        "word": 'in'
    },
    /* Pronoun */7: {
        "pronoun": true,
        "she": ["her"],
        "he": ["his"],
        "they": ["their"],
    },
    /* Noun to hold something */ 8: {
        "neutral": ['hands'],
        "happy": ['gucci handbag'],
        "angry": ['cigarette box'],
        "sad": ['slightly grimy bowl'],
        "disgusted": ['5p Tescos bag'],
        "surprised": ['salad bowl']
    },
    /* fill */ 9: {
        "fill": true,
        "word": 'and'
    },
    /*Adjective - feeling, end sentence */ 10: {
        "neutral": ['felt underwhelmed. </br>'],
        "happy": ['thought, hot damn! </br>'],
        "angry": ['was furious. </br>'],
        "sad": ["didn't really care. </br>"],
        "disgusted": ['was revolted. </br>'],
        "surprised": ['felt rather flushed. </br>']
    },
    // END OF FIRST SENTENCE
    /* Pronoun */11: {
        "pronoun": true,
        "she": ["She"],
        "he": ["He"],
        "they": ["They"],
    },
    /* Verb */12: {
        "neutral": ['walked over to', 'felt unconcerned by'],
        "happy": ['dreamt about'],
        "angry": ['protested the'],
        "sad": ['curled up against', 'felt dissapointed by'],
        "disgusted": ['felt disturbed by'],
        "surprised": ['explored the']
    },
    /* fill */ 13: {
        "fill": true,
        "word": 'the'
    },
     /*Adjective */ 14: {
        "neutral": ['uninteresting', 'nonaligned'],
        "happy": ['amatory', 'astonishing'],
        "angry": ['egregious', 'bitter', 'distressed'],
        "sad": ['lachrymose', 'doleful', 'sorrowful'],
        "disgusted": ['feckless', 'troubled', 'dismal'],
        "surprised": ['fecund', 'bewildering', 'confounding']
    },
     /* Noun */ 15: {
        "neutral": ['street'],
        "happy": ['sunlight', 'rainbow'],
        "angry": ['volcano'],
        "sad": ['waterfall'],
        "disgusted": ['swamp'],
        "surprised": ['socks']
    },
    /* fill */ 16: {
        "fill": true,
        "word": 'and'
    },
     /* Verb */17: {
        "neutral": ['considered'],
        "happy": ['reflected on'],
        "angry": ['snarled at'],
        "sad": ['dismissed'],
        "disgusted": ['glared at'],
        "surprised": ['reverberated through']
    },
     /* Pronoun */18: {
        "pronoun": true,
        "she": ["her"],
        "he": ["his"],
        "they": ["their"],
    },
    /*Adjective */ 19: {
        "neutral": ['equanimous'],
        "happy": ['cerulean'],
        "angry": ['hubristic'],
        "sad": ['dowdy'],
        "disgusted": ['feckless'],
        "surprised": ['efficacious']
    },
     /* Noun */ 20: {
        "neutral": ['surroundings.'],
        "happy": ['amusement.'],
        "angry": ['aftermath.'],
        "sad": ['ink.'],
        "disgusted": ['jellyfish.'],
        "surprised": ['goose.']
    },
     // END OF SECOND SENTENCE
    /* Pronoun */21: {
        "pronoun": true,
        "she": ["She"],
        "he": ["He"],
        "they": ["They"],
    },
    /* fill */ 22: {
        "fill": true,
        "word": 'had'
    },
    /* Adverb */  23: {
        "neutral": ['always'],
        "happy": ['perpetually'],
        "angry": ['without exception'],
        "sad": ['never'],
        "disgusted": ['invariably'],
        "surprised": ['unceasingly']
    },
    /* Verb */24: {
        "neutral": ['been ok with', 'been unbiased about'],
        "happy": ['adored', 'cherished'],
        "angry": ['felt engulfed by'],
        "sad": ['dismissed'],
        "disgusted": ['felt revolted by'],
        "surprised": ['weaved through', 'idolized']
    },
     /*Adjective */ 25: {
        "neutral": ['inactive'],
        "happy": ['risible'],
        "angry": ['pernicious'],
        "sad": ['turbulent', 'somber', 'wistful'],
        "disgusted": ['obtuse'],
        "surprised": ['pervasive']
    },
    /* Place */ 26: {

        "neutral": ['London'],
        "happy": ['San Francisco'],
        "angry": ['avalanche'],
        "sad": ['bowling alley'],
        "disgusted": ['obtuse'],
        "surprised": ['mountains']
    },
    /* fill */ 27: {
        "fill": true,
        "word": 'with its'
    },
    /*Adjective */ 28: {
        "neutral": ['average,'],
        "happy": ['risible,'],
        "angry": ['strident,'],
        "sad": ['querulous,'],
        "disgusted": ['withering,'],
        "surprised": ['verdant,']
    },
    /*Adjective */ 29: {
        "neutral": ['quite ok'],
        "happy": ['arcadian'],
        "angry": ['baleful'],
        "sad": ['belligerent'],
        "disgusted": ['dilatory'],
        "surprised": ['adriot']
    },
     /* Noun */ 30: {
        "neutral": ['corners.'],
        "happy": ['jewel.'],
        "angry": ['oil.'],
        "sad": ['nooks.'],
        "disgusted": ['msucle.'],
        "surprised": ['legs.']
    },
    /* END OF THIRD SENTENCE /*
    /* fill */ 31: {
        "fill": true,
        "word": 'It was a place that'
    },
    /* Verb */32: {
        "neutral": ['resolved'],
        "happy": ['encouraged'],
        "angry": ['wrecked'],
        "sad": ['veiled'],
        "disgusted": ['transfigured'],
        "surprised": ['yanked']
    },
    /* Pronoun */33: {
        "pronoun": true,
        "she": ["her"],
        "he": ["his"],
        "they": ["their"],
    },
     /* Noun */ 34: {
        "neutral": ['tendency'],
        "happy": ['proclivity'],
        "angry": ['slant'],
        "sad": ['temperament'],
        "disgusted": ['weakness'],
        "surprised": ['readiness']
    },
    /* fill */ 35: {
        "fill": true,
        "word": 'to feel'
    },
    /* adjective */36: {
        "neutral": ['neutral.'],
        "happy": ['fulsome.'],
        "angry": ['intransigent.'],
        "sad": ['judicious.'],
        "disgusted": ['insolent.'],
        "surprised": ['yanked.']
    },




}
