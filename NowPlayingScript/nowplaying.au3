#RequireAdmin
#include <MsgBoxConstants.au3>
#include <Array.au3>

While 1
   Opt("WinTitleMatchMode", 2)
   $fullTitle = WinGetTitle("MusicBee")
   $fileLocation = "C:\PersonalSync\Livestream\NowPlayingSong\np\Tags.json"

   $array = StringRegExp($fullTitle, "(.*?) - MusicBee",1)
   $array = StringSplit($array[0],"\|")

   $artist = $array[1]
   $album = $array[2]
   $song = $array[3]

   $theText= '{"artist":"' & $array[1] & '","album":"' & $array[2] & '","title":"' & $array[3] & '"}';
   FileOpen($fileLocation,2)
   FileWrite($fileLocation,$theText)
   Sleep(15000)
WEnd