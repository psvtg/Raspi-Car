
//Rhys Broughton -

//This was made using CocoaAsyncSocket



#import "ViewController.h"
#import "GCDAsyncUdpSocket.h"

#define FORMAT(format, ...) [NSString stringWithFormat:(format), ##__VA_ARGS__]
int msg = 0;
int pmsg = 0;
@interface ViewController ()
{
    
    GCDAsyncUdpSocket *udpSocket;
    
    NSString *msg; //declears the String for the message
    NSString *host; //declears the string for the ip
    int port; //creates an intager for the port
}

@end

@implementation ViewController

- (void)setupSocket
{
    udpSocket = [[GCDAsyncUdpSocket alloc] initWithDelegate:self delegateQueue:dispatch_get_main_queue()];
}

- (void)viewDidLoad
{
    
    
    
    port = 2580; //setting the port (the one that was set on  the arduino)  - NOT 80
    host = @"95.182.40.36"; //seting the ip - 192.168.x.x (the one that was set on  the arduino)
    [super viewDidLoad];
    
    
    self.motionManager = [[CMMotionManager alloc] init];
    self.motionManager.accelerometerUpdateInterval = .05;
    self.motionManager.gyroUpdateInterval = .05;
    
    [self.motionManager startAccelerometerUpdatesToQueue:[NSOperationQueue currentQueue]
                                             withHandler:^(CMAccelerometerData  *accelerometerData, NSError *error) {
                                                 [self outputAccelertionData:accelerometerData.acceleration];
                                                 if(error){
                                                     
                                                     NSLog(@"%@", error);
                                                 }
                                             }];
    
    [self.motionManager startGyroUpdatesToQueue:[NSOperationQueue currentQueue]
                                    withHandler:^(CMGyroData *gyroData, NSError *error) {
                                        [self outputRotationData:gyroData.rotationRate];
                                    }];
    
    
    NSString *fullURL = @"http://95.182.40.36:8050";
    NSURL *url = [NSURL URLWithString:fullURL];
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    [_WEB1 loadRequest:requestObj];
    if (udpSocket == nil)
    {
        [self setupSocket];
    }
    
}


-(void)outputRotationData:(CMRotationRate)rotation
{
    
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}



- (IBAction)FORWARDAction:(id)sender {
    msg = @"300";  //the message that the arduino is looking for
    [self sendData]; //run te void
    
}



- (IBAction)BACKWARDAction:(id)sender {
    msg = @"200";  //the message that the arduino is looking for
    [self sendData]; //run te void
    
    
}

- (IBAction)FORWARDActionStop:(id)sender {
    msg = @"100";  //the message that the arduino is looking for
    [self sendData]; //run te void
}


- (IBAction)BACKWARDActionStop:(id)sender {
    msg = @"100";  //the message that the arduino is looking for
    [self sendData]; //run te void
    
}






- (void)sendData{
    
    NSData *data = [msg dataUsingEncoding:NSUTF8StringEncoding]; //setting the data to the message
    [udpSocket sendData:data toHost:host port:port withTimeout:-1 tag:1]; //give the code the ip and port
    
    
}








-(void)outputAccelertionData:(CMAcceleration)acceleration
{
    
    
    
    self.X.text = [NSString stringWithFormat:@" %.2f",acceleration.x];
    
    self.Y.text = [NSString stringWithFormat:@" %.0f",roundf(1600-(acceleration.y*800))];
    
    self.Z.text = [NSString stringWithFormat:@" %.2f",acceleration.z];
    
    int cmsg = roundf(1600-(acceleration.y*800));
    if (abs(cmsg - pmsg) > 10)
    {
        pmsg = cmsg;
        msg = [NSString stringWithFormat:@" %.0f",roundf(1600-(acceleration.y*800))];
       [self sendData]; //run te void
    }
}


@end
