<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<!-- This causes the HTML doctype (<!doctype hmlt>) to be rendered. -->
	<xsl:output method="html" doctype-system="about:legacy-compat" indent="yes" />

	<!-- Start matching at the Channel node within the XML RSS feed. -->
	<xsl:template match="/rss/channel">

		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<title>
				<xsl:value-of select="title" />
			</title>

			<link rel="shortcut icon" type="image/ico" href="https://support.brightcove.com/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />

			<link rel="stylesheet" type="text/css" href="https://support.brightcove.com/site-assets/css/site/release-notes.css" />
		</head>
		<body>

			<h1 class="title">
				<xsl:value-of select="title" />
			</h1>

			<p class="description">
				<xsl:value-of select="description" />
			</p>

			<ul class="release-notes" style="list-style:none;">
				<xsl:for-each select="./item">

					<li class="release-notes__note">

						<h2 class="release-note__title">
								<xsl:value-of select="title" />
						</h2>

            <p class="release-note__date">
              <xsl:value-of select="pubDate" />
            </p>

						<p class="release-note__preview">
							<xsl:value-of select="description" />
            </p>
            <p class="release-note__more">
							<a href="{ link }" class="post__more" target="_blank">Read more</a>
						</p>

					</li>

				</xsl:for-each>
			</ul>


		</body>
		</html>

	</xsl:template>

</xsl:stylesheet>
