<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
        <xsl:template match="/">
      <html>
         <body>
         <table border="1">
         <tr>
            <th>Name</th>
            <th>Developer</th>
         </tr>
         <xsl:for-each select="games/game">
             <tr>
             <td> <xsl:value-of select="name" /> </td>
             <td> <xsl:value-of select="developer" /> </td>
             </tr>
            
            </xsl:for-each>
            </table>
         </body>
      </html>
</xsl:template>
</xsl:stylesheet>