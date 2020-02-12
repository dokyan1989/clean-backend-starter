### -G, --get
When used, this option will make all data specified with **-d, --data, --data-binary** or **--data-urlencode** to be used in an HTTP GET request instead of the POST request that otherwise would be used. The data will be appended to the URL with a '?' separator.

If used in combination with -I, --head, the POST data will instead be appended to the URL with a HEAD request.  

If this option is used several times, only the first one is used. This is because undoing a GET doesn't make sense, but you should then instead enforce the alternative method you prefer.

**Example**: curl -G --data "limit=0&page=22222" http://localhost:3000
