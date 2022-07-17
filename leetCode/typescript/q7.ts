// https://leetcode.com/problems/defanging-an-ip-address/submissions/
// my code
function defangIPaddr(address: string): string {
	const regex = /\./g;
	return address.replace(regex, "[.]");
};

// best code
// function defangIPaddr(address: string): string {
// 	return address.split('.').join('[.]')
//  };
 