
export default function Button({
   children,
   bgColor = 'var(--color-primary)',
   textColor = 'var(--color-white)',
   radius = '0px',
   width = 'max-content',
   padding = '8px 12px',
   fontSize = 'var(--fs-body)',
   className = '',
   href = null,
   ...others }) {

   const styles = {
      backgroundColor: bgColor,
      color: textColor,
      borderRadius: radius,
      width,
      padding,
      fontSize,
   }
   return (
      <>
         {!href &&
            <button className={`button ${className}`} style={styles} {...others} >
               {children}
            </button>}

         {href &&
            <a className={`button ${className}`} style={styles} {...others} href={href} >
               {children}
            </a>
         }
      </>
   )
}
