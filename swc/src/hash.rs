use base64::{engine::general_purpose, Engine as _};
use xxhash_rust::xxh32::xxh32;

/// Creates a CSS identifier using xxHash (https://cyan4973.github.io/xxHash/).
/// Shortened to base62 (https://en.wikipedia.org/wiki/Base62) to avoid invalid characters.
pub fn hash(data: &str) -> String {
    let hash = xxh32(data.as_bytes(), 0);
    general_purpose::URL_SAFE_NO_PAD.encode(hash.to_be_bytes())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn short2() {
        assert_eq!(hash("../test/fixtures/a.js"), "lvxXYA");
    }
    #[test]
    fn short() {
        assert_eq!(hash("hey"), "fQmvQw");
    }

    #[test]
    fn longer() {
        assert_eq!(hash("hey how are you doing?"), "p4Z1Dg");
    }

    #[test]
    fn longest() {
        assert_eq!(
            hash("hey how are you doing? I am doing fine, thanks for asking."),
            "VApwzg"
        );
    }
}
