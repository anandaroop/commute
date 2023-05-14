export const SubwaySymbol: React.FC<{ line: Line, size?: number }> = ({ line, size = 1 }) => {
    return (
        <div
            className={`mta mta-symbol subway-${line.toLowerCase()}`}
            style={{ fontSize: `${size}rem` }}
        />
    )
}

export type Line =
    '1' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6' |
    '7' |
    'A' |
    'B' |
    'C' |
    'D' |
    'E' |
    'F' |
    'G' |
    'J' |
    'L' |
    'M' |
    'N' |
    'Q' |
    'R' |
    'S' |
    'T' |
    'W' |
    'Z' |
    'a' |
    'b' |
    'c' |
    'd' |
    'e' |
    'f' |
    'g' |
    'j' |
    'l' |
    'm' |
    'n' |
    'q' |
    'r' |
    's' |
    't' |
    'w' |
    'z' 