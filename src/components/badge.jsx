import PropTypes from 'prop-types';

export default function Badge({children, setBackGround, uppercase = false,withBorder = false , ...rest}){
    const background = {
        white:"#F3F4F6",
        red:"#FEE2E2",
        yellow:"#FEF3C7",
        green:"#D1FAE5",
        blue:"#DBEAFE",
        indigo:"#E0E7FF",
        purple:"#EDE9FE",
        pink:"#FCE7F3",
    }

    const fontColor = {
        white:"#1F2937",
        red:"#991B1B",
        yellow:"#92400E",
        green:"#065F46",
        blue:"#1E40AF",
        indigo:"#3730A3",
        purple:"#5B21B6",
        pink:"#9D174D",
    }

    const styles = {
        backgroundColor : background[setBackGround],
        color: fontColor[setBackGround],
        textTransform: uppercase ? "uppercase" : '',
    }

    return(
        <h1 {...rest} style={styles} className={`badge ${withBorder ? "border" : ""}`} >{children}</h1>
    )

}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    setBackGround: PropTypes.oneOf([
        'white', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'
    ]).isRequired,
    uppercase: PropTypes.bool,
    withBorder: PropTypes.bool,
};