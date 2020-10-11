import 'dart:async';
import 'dart:io';

Future main() async {

  HttpServer server;

  try {
    server = await HttpServer.bind(InternetAddress.loopbackIPv4, 4040);
  } catch (e) {
    print('failed to start server $e');
    exit(-1);
  }

  print('Listening on Localhost:${server.port}');

  await for (var req in server) {
    HttpResponse response = req.response
      ..headers.contentType = ContentType.html;
    String filename;

    if (req.method == 'GET') {

      if (req.uri.pathSegments.isEmpty) {
        filename = 'index';
      } 
      else if (req.uri.pathSegments.last == 'back') {
        filename = 'index';
      } 
      else {
        filename = req.uri.pathSegments.last;
      }

      if (!filename.contains('.html')) {
        filename = filename + '.html';
      }

      File file = File(filename);

      if (await file.exists()) {
        file.openRead().pipe(response);
      }
      else {
        file
            .openWrite(mode: FileMode.write)
            .write('<h1>404 Page not found!</h1>');

        file.openRead().pipe(response);
      }
    }
  }
}
