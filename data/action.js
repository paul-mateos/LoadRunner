//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Sun Sep 13 21:50:51 2020
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action()
{
	web.url(
		{
			name : 'dd.xml', 
			url : 'http://192.168.0.22:37616/dd.xml', 
			resource : 1, 
			recContentType : 'application/xml', 
			referer : '', 
			snapshot : 't23.inf'
		}
	);

	web.url(
		{
			name : 'dd.xml_2', 
			url : 'http://192.168.0.43:8060/dial/dd.xml', 
			resource : 0, 
			recContentType : 'text/xml', 
			referer : '', 
			snapshot : 't24.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : 'http://192.168.0.38:8008/ssdp/device-desc.xml', referer : ''}
			]
		}
	);

	web.setSocketsOption('SSL_VERSION', '2&3');

	// Possible OAUTH authorization was detected. It is recommended to correlate the authorization parameters.
	lr.thinkTime(5);
	web.customRequest(
		{
			name : 'token', 
			url : 'https://www.googleapis.com/oauth2/v4/token', 
			method : 'POST', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '', 
			snapshot : 't25.inf', 
			mode : 'HTML', 
			body : 'client_id=77185425430.apps.googleusercontent.com&client_secret=OTJgUOQcT7lO7GsGZq2G4IlT&grant_type=refresh_token&refresh_token=1//0gn8Vfq1TXqA1CgYIARAAGBASNwF-L9IriNk8rl1QSND-iNc4nO_b0j5D46FnShXD209P8CjIDLfT-xfYzUUj6KUNMTMPyDyEsDE'
		}
	);

	web.addCookie('LSOLH=|_SVI_Ch9BN2lTVmNmZkNURVR3TEM4U1VQdkI1WUZqbUpvR0JjEMWwuuDX7ugCGBAiP01BRURIZl9xakpDb2xuZWxDRDBMSWtuZEpwdmxNVXdIdnEyMXcycU54QktIRWhaeWZnLXJfSlpFS3lJQmhMMA_:|26451679:8129; DOMAIN=accounts.google.com');

	web.addCookie('SEARCH_SAMESITE=CgQIrZAB; DOMAIN=accounts.google.com');

	web.addCookie('ACCOUNT_CHOOSER=AFx_qI76SMzCk8KuZNc2GoZyS62UO2MgZNj623Hh3Jb6N9_VCWr-6IOxAgSd4mrqSj9Xz674CXAonblKr2klMoiIB7PxQyQ0JfcfOlvF-MJB9hdm6t857yNzKhkVHX4cktCU1HfndNYaDVYL12Gp1pctOpcHK1CvXsgAtpMDKdYFevxZPXOzauWcyR6kF3u_y-ccvBPYSAhVuVmmGxjGY97a3Kx9AEq1sg; DOMAIN=accounts.google.com');

	web.addCookie('OGPC=19018621-1:19019710-1:19019903-1:19019990-1:19020037-1:; DOMAIN=accounts.google.com');

	web.addCookie('SID=1AdpJEmRkjuvcFPyokYAoRFgLJOCR7zP3jDUQ-E5CvFj3HOfI0RU350EGoie-Wh_kANBUA.; DOMAIN=accounts.google.com');

	web.addCookie('__Secure-3PSID=1AdpJEmRkjuvcFPyokYAoRFgLJOCR7zP3jDUQ-E5CvFj3HOf9yYwYLpdTXU5gFkz7VnRCQ.; DOMAIN=accounts.google.com');

	web.addCookie('HSID=AxsCq0UEQOedosZkK; DOMAIN=accounts.google.com');

	web.addCookie('SSID=As4SYfcrexlNv_Ra1; DOMAIN=accounts.google.com');

	web.addCookie('APISID=VMjAkefyvlfZlqAe/AXj4FpGLTEvj5cgU0; DOMAIN=accounts.google.com');

	web.addCookie('SAPISID=ieKIFJSgZYuHeBGP/ALI0UdrDs9q_-U-2e; DOMAIN=accounts.google.com');

	web.addCookie('__Secure-3PAPISID=ieKIFJSgZYuHeBGP/ALI0UdrDs9q_-U-2e; DOMAIN=accounts.google.com');

	web.addCookie('ANID=AHWqTUmosKig2Z69CfKLyq8y9PCr9PV0pQUwSTarmGOd8UH0j31RTdtSJyD6YKwN; DOMAIN=accounts.google.com');

	web.addCookie('LSID=doritos|lso|o.calendar.google.com|o.groups.google.com|o.mail.google.com|o.myaccount.google.com|o.smartlock.google.com|s.AU|s.blogger|s.youtube|ss:1AdpJJnX8nrHNeELnbxWABZpiTEK6KDnZ4-20REIF2HkWU7tGooIe4CgkotuG5O95N2vgw.; DOMAIN=accounts.google.com');

	web.addCookie('__Host-3PLSID=doritos|lso|o.calendar.google.com|o.groups.google.com|o.mail.google.com|o.myaccount.google.com|o.smartlock.google.com|s.AU|s.blogger|s.youtube|ss:1AdpJJnX8nrHNeELnbxWABZpiTEK6KDnZ4-20REIF2HkWU7tzMUacTOtT2vnpl58LgifkA.; DOMAIN=accounts.google.com');

	web.addCookie('__Host-GAPS=1:lh2mlqXJu2DrL1RbnU1SZ5x2TqDPlduN3Aw4fRRofGa-cqPApsXM4ozyLiPM771imvalslEASGllqkVCgLCwckCeO0XiEw:UmJ7gXRAvPQwMhCs; DOMAIN=accounts.google.com');

	web.addCookie('NID=204=BrusSTImAJYr3ud0lW2CeZlWx0m79MZxLcjAHbJ7Kv8LxYvgJQMWyZ9uPhiP-Nr2HBJ7j2-OOJ84DS9LevHTFaSro0OIB58_tzvZ7C4dAIxXV4zjhU1boCrteKx9gv5S8xMLWdfQ1DnO6GoKqFAzFF7825Q393KDrUAusqYLfcZSNCFmIovumJj16HwwKrHx2HB8feqKoYzXwXIOH8bOpleXi1KDkb7tsp2N2cl70hV177XMAQkF2z9q3KH302vXwi1j09CZoHz4U94z_OTgpZ1XYlortdubtFhwCAFyJaNOvXLgaLDomz2RZ-Sy-vMU-ACOOzJJTuDT5GtmOS-SJNIb5x0hUrsQaHOkliumYvOBFEByD5N_-WloGDacLDORhPACg2MdCxc6NwGGQ1c; DOMAIN=accounts.google.com');

	web.addCookie('1P_JAR=2020-09-13-11; DOMAIN=accounts.google.com');

	web.addCookie('SIDCC=AJi4QfHCdNNu4e3v6Zc84CAPOUxZ3rs2qvFNvqPjLzzCQgRIbwmZwYUQzMmEjEDM39zVOPDyHFs; DOMAIN=accounts.google.com');

	web.addCookie('__Secure-3PSIDCC=AJi4QfF9gGvWSlYRYT5Xk7MxPfypDmszLQ_NaObgZw2qy-EQ2eTO4-mwjbokRuF2UxhNTz92Sjg; DOMAIN=accounts.google.com');

	web.customRequest(
		{
			name : 'ListAccounts', 
			url : 'https://accounts.google.com/ListAccounts?gpsia=1&source=ChromiumBrowser&json=standard', 
			method : 'POST', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '', 
			snapshot : 't26.inf', 
			mode : 'HTML', 
			body : ' '
		}
	);

	web.url(
		{
			name : 'seed', 
			url : 'https://clientservices.googleapis.com/chrome-variations/seed?osname=win&channel=stable&milestone=85', 
			resource : 0, 
			referer : '', 
			snapshot : 't27.inf', 
			mode : 'HTML'
		}
	);

	web.customRequest(
		{
			name : 'token_2', 
			url : 'https://www.googleapis.com/oauth2/v4/token', 
			method : 'POST', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '', 
			snapshot : 't28.inf', 
			mode : 'HTML', 
			body : 'client_id=77185425430.apps.googleusercontent.com&client_secret=OTJgUOQcT7lO7GsGZq2G4IlT&grant_type=refresh_token&refresh_token=1//0gn8Vfq1TXqA1CgYIARAAGBASNwF-L9IriNk8rl1QSND-iNc4nO_b0j5D46FnShXD209P8CjIDLfT-xfYzUUj6KUNMTMPyDyEsDE&scope=https://www.googleapis.com/auth/chromesync'
		}
	);

	return 0;
}

