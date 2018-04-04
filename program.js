process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    var version = process.versions.node;
	
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction){
        	case '/exit':
        		process.stdout.write('Quitting app!\n');
            	process.exit();
            	break;
            case 'version':
				process.stdout.write('Node version: '+version+'\n');
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
        }

    }
});