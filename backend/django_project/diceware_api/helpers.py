import os

WORDLIST_PATH = "business/wordlists"


def get_wordlists(WORDLIST_PATH):
    filenames = os.listdir(WORDLIST_PATH)
    return filenames


if __name__ == "__main__":
    get_wordlists(WORDLIST_PATH)
